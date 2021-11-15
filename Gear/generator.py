from random import randrange
import numpy

def rotate_left(time, prev_position):
  for seq in range(time):
    position_index = seq_rotate_left.index(prev_position)
    output.write(
      f'{seq_rotate_left[(position_index + 1) % 4]} {seq_rotate_left[(position_index + 2) % 4]} '
    )

    prev_position = seq_rotate_left[(position_index + 2) % 4]

  return prev_position
    

def rotate_right(time, prev_position):
  for seq in range(time):
    position_index = seq_rotate_right.index(prev_position)
    output.write(
      f'{seq_rotate_right[(position_index + 1) % 4]} {seq_rotate_right[(position_index + 2) % 4]} '
    )
    prev_position = seq_rotate_right[(position_index + 2) % 4]

  return prev_position
    

def rotate_stop(time, prev_position):
  for seq in range(time):
    output.write(f'{prev_position} {prev_position} ')

  return prev_position


def rotate_fail(time, prev_position):
  for seq in range(time):
    output.write('FF FF ')

  return prev_position
    

rotation_mode = {
  0: rotate_left,
  1: rotate_right,
  2: rotate_stop,
  3: rotate_fail
}

seq_rotate_left = ["LL", "LH", "HH", "HL"]
seq_rotate_right = ["LL", "HL", "HH", "LH"]
last_position = "LL"
output = open("data.txt", "w")


if __name__ == "__main__":
  for run in range(100):
    simulate_time = randrange(1, 101)
    simulate_rotation = numpy.random.choice(
      numpy.arange(0, 4), p=[0.45, 0.45, 0.09, 0.01]
    )

    last_position = rotation_mode[simulate_rotation](simulate_time, last_position)

  output.close()