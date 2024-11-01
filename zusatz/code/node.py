import re

class Node:
    """ Represents a node in the logic tree.
    Attributes:
        operator (str): The logical operator ('AND', 'OR', 'NOT', or None for leaf nodes)
        criteria (str): The criteria text for leaf nodes
        left (Node): Left child node
        right (Node): Right child node
    """
    def __init__(self, operator=None, criteria=None):
        self.operator = operator
        self.criteria = criteria
        self.left = None
        self.right = None

    def to_dict(self):
        """ Converts the node and its children to a dictionary representation.
        Returns: dict: A dictionary representing the node structure
        """
        if self.operator:
            children = {}
            if self.left:
                children["left"] = self.left.to_dict()
            if self.right:
                children["right"] = self.right.to_dict()
            return {self.operator: children}
        else:
            return {"raw_text": self.criteria if self.criteria is not None else "empty set"}

def parse_text(text):
    """ Parses a string of logical criteria into a tree structure.
    Args:
        text (str): The input string containing logical criteria
    Returns:
        Node: The root node of the parsed tree
    """
    if not text:
        return None

    # Regular expression to match logical operators
    pattern = r'\[AND\]|\[OR\]|\[NOT\]'
    matches = list(re.finditer(pattern, text))

    if matches:
        first_match = matches[0]
        operator = text[first_match.start():first_match.end()].strip('[]')
        before = text[:first_match.start()].strip()
        after = text[first_match.end():].strip()

        node = Node(operator=operator)

        if operator == 'NOT':
            if before:
                # Handle case where there's text before NOT
                before_node = Node(criteria=before)
                not_node = Node(operator='NOT')
                not_node.left = parse_text(after) if after else None
                combined_node = Node(operator='AND')
                combined_node.left = before_node
                combined_node.right = not_node
                return combined_node
            else:
                node.left = parse_text(after) if after else None
        else:
            # For AND and OR operators
            node.left = parse_text(before) if before else None
            node.right = parse_text(after) if after else None

        return node
    else:
        # If no operators found, create a leaf node
        return Node(criteria=text)

def build_tree(data):
    """ Builds a complete logic tree from a dictionary of criteria.
    Args:
        data (dict): A dictionary where keys are irrelevant and values are logical criteria strings
    Returns:
        Node: The root node of the complete logic tree
    """
    if not data:
        return Node(criteria="empty set")

    keys = list(data.keys())
    if not keys:
        return Node(criteria="empty set")

    # Parse each criteria string into a subtree
    nodes = [parse_text(data[key]) for key in keys if parse_text(data[key])]

    if len(nodes) == 1:
        return nodes[0]

    # Combine all subtrees with AND operators
    root = nodes[0]
    for i in range(1, len(nodes)):
        new_node = nodes[i]
        temp = Node(operator='AND')
        temp.left = root
        temp.right = new_node
        root = temp

    return root



import json

data = {"1": "Criteria A [AND] Criteria B", "2": "Criteria C [NOT] Criteria D"}
root = build_tree(data)
print(json.dumps(root.to_dict(), indent=2))