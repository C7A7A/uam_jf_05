import random
from stateMachine import StateMachine
import fileinput


def generate_data(amount):
    data = []
    for number in range(amount):
        if random.randint(0, 1) == 0:
            data.append("J")
        else:
            data.append("C")

    return data


if __name__ == "__main__":
    barcode = generate_data(100)
    [print(i, end="") for i in barcode]
    print()

    parser = StateMachine()
    for event in barcode:
        parser.parse_event(event)
    # for event in fileinput.input():
    #     parser.parse_event(event.rstrip("\n"))
    parser.cleanup()

