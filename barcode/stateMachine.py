class StateMachine:
    def __init__(self):
        self._state = ''

    def set_j(self):
        if self._state == "JC":
            print('0', end='')

        self._state = "J"
        print('-', end='')

    def set_c(self):
        self._state = "C"
        print('-', end='')

    def set_jc(self):
        self._state = "JC"

    def set_jcc(self):
        if self._state == "JC":
            print('-', end="")

        self._state = "JCC"
        print('1', end='')

    def parse_event(self, event):
        if event == "J":
            self.set_j()
        elif self._state == "J" and event == "C":
            self.set_jc()
        elif self._state == "JC" and event == "C":
            self.set_jcc()
        elif event == "C":
            self.set_c()
        else:
            self.set_j()

    def cleanup(self):
        if self._state == "JC":
            print('0', end="")
