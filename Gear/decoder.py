

def parse_line(line, tmp_states):
	gear_stop_counter = 0
	states = line.split(" ")
	
	for element in range(len(tmp_states)):
		states.insert(0, tmp_states.pop())

	while (len(states) > 1):
		
		state1 = states[0]
		state2 = states[1]

		#  handle fail
		if (state1 == "FF" or state2 == "FF"):
			print("FAIL")
		else:
			#  handle stop
			if (state1 == state2):
				gear_stop_counter += 1
				if (gear_stop_counter >= 10):
					gear_stop_counter = 0
					print("STOP")

			#  handle left
			pos_state1 = seq_rotate_left.index(state1)
			pos_state2 = seq_rotate_left.index(state2)
			if ((pos_state1 + 1) % 4 == (pos_state2) % 4):
				print("LEFT")

			#  handle right
			pos_state1 = seq_rotate_right.index(state1)
			pos_state2 = seq_rotate_right.index(state2)
			if ((pos_state1 + 1) % 4 == (pos_state2) % 4):
				print("RIGHT")
		
		del states[0:2]
	tmp_states = states.copy()


tmp_states = []
seq_rotate_left = ["LL", "LH", "HH", "HL"]
seq_rotate_right = ["LL", "HL", "HH", "LH"]	


if __name__ == "__main__":
	with open("data.txt") as f:
		for line in f:
			parse_line(line, tmp_states)
