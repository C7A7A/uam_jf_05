import random


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
    print(barcode)
