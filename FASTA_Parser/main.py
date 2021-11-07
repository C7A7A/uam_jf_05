import re
import pprint


def read_file(path):
    with open(path) as f:
        lines = f.readlines()
        for line in lines:
            print(line, end="")
            validate(line)


def validate(line):
    line = line.strip()

    validate_length(line.__len__())

    if is_description_line(line[0]):
        global description_line_counter
        description_line_counter = description_line_counter + 1
        sequences[line] = 0
        descriptions.append(line)

    else:
        validate_allowed_characters(line)
        sequences[descriptions[-1]] += line.__len__()


def validate_length(line_len):
    if line_len > 140:
        print("Line is too long (> 140 characters)")


def validate_allowed_characters(line):
    if re.search(pattern, line):
        print("Not allowed characters in line")


def is_description_line(start_char):
    if start_char == ">" or start_char == ";":
        return True
    return False


pattern = re.compile(r'[^A-Z*-]')
descriptions = list()
sequences = {}
description_line_counter = 0

if __name__ == '__main__':
    read_file("../data.txt")
    print("Description line counter: ", description_line_counter)
    pp =  pprint.PrettyPrinter(indent=4)
    pp.pprint(sequences)
   
