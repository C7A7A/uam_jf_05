from random import randrange
import numpy


def rotate_left(time):
  for seq in range(time):
    print(seq_rotate_left[seq % 2], end="")
  return seq_rotate_left[(time-1) % 2][3:5]
    

def rotate_right(time):
  for seq in range(time):
    print(seq_rotate_right[seq % 2], end="")
  return seq_rotate_right[(time-1) % 2][3:5]


def rotate_stop(time):
  for seq in range(time):
    print(f'{last_position} {last_position} ', end="")


def rotate_fail(time):
  for seq in range(time):
    print(seq_rotate_fail, end="")
  return "FF"
    

rotation_mode = {
  0: rotate_left,
  1: rotate_right,
  2: rotate_stop,
  3: rotate_fail
}

seq_rotate_left = ["LL LH ", "HH HL "]
seq_rotate_right = ["LL HL ", "HH LH "]
seq_rotate_fail = "FF FF "
last_position = "LL"


if __name__ == "__main__":
  for run in range(100):
    simulate_time = randrange(1, 101)
    simulate_rotation = numpy.random.choice(
      numpy.arange(0, 4), p=[0.45, 0.45, 0.09, 0.01]
    )

    last_position = rotation_mode[simulate_rotation](simulate_time)
    print("")


