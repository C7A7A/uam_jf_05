import re


def read_file(path):
    description_line_counter = 0
    with open(path) as f:
        lines = f.readlines()
        for line in lines:
            if line[0] == ">" or line[0] == ";":
                description_line_counter += 1
            validate(line)
            print(line, end="")
    print("Description line counter: ", description_line_counter)


def validate(line):
    start_char = validate_start_character(line[0])
    if not start_char:
        validate_allowed_characters(line)
        sequences[descriptions[-1]] += line.__len__()
    else:
        sequences[line] = 0
        descriptions.append(line)

    validate_length(line.__len__())


def validate_length(line_len):
    if line_len > 120:
        print("Line is too long (> 120 characters)")


def validate_start_character(start_char):
    if start_char == ">" or start_char == ";":
        return True
    return False


def validate_allowed_characters(line):
    if not re.search(pattern, line):
        print("Not allowed characters in line")


pattern = re.compile('[A-Z/*;-]')
descriptions = list()
sequences = {}

if __name__ == '__main__':
    read_file("../data.txt")
    print(sequences)


