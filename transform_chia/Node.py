import re

class Node:
    def __init__(self, operator=None, criteria=None):
        self.operator = operator
        self.criteria = criteria
        self.conditions = []
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
            return {"raw_text": self.criteria}

def parse_text(text):
    pattern = r'\[AND\]|\[OR\]|\[NOT\]'
    matches = list(re.finditer(pattern, text))
    if matches:
        first_match = matches[0]
        operator = text[first_match.start():first_match.end()].strip('[]')
        before = text[:first_match.start()].strip()
        after = text[first_match.end():].strip()
        node = Node(operator=operator)
        if operator == 'NOT':
            node.left = parse_text(after)  # NOT hat nur ein Argument
        else:
            node.left = parse_text(before)
            node.right = parse_text(after)

        return node
    else:
        return Node(criteria=text)

def build_tree(data):
    root = Node(operator='AND')
    last_node = root
    for key, value in data.items():
        if last_node.left is None:
            last_node.left = parse_text(value)
        else:
            new_node = Node(operator='AND')
            last_node.right = new_node
            last_node = new_node
            last_node.left = parse_text(value)
    return root
