import json
import re


class Node:
    def __init__(self, operator=None, criteria=None):
        self.operator = operator
        self.criteria = criteria
        self.left = None
        self.right = None

    def to_dict(self):
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
    if not text:
        return None

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
            node.left = parse_text(before) if before else None
            node.right = parse_text(after) if after else None
        return node
    else:
        return Node(criteria=text)

def build_tree(data):
    if not data:
        return Node(criteria="empty set")

    keys = list(data.keys())
    if not keys:
        return Node(criteria="empty set")

    nodes = [parse_text(data[key]) for key in keys if parse_text(data[key])]

    if len(nodes) == 1:
        return nodes[0]

    root = nodes[0]
    for i in range(1, len(nodes)):
        new_node = nodes[i]
        temp = Node(operator='AND')
        temp.left = root
        temp.right = new_node
        root = temp

    return root
