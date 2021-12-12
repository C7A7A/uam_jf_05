class StateMachine:
    _state = "J"

    def set_j(self):
        self._state = "J"

    def set_jc(self):
        self._state = "JC"

    def set_jcc(self):
        self._state = "JCC"

    def parse_event(self, event):
        if self._state == "J" and event == "J":
            self.set_j()
        elif self._state == "J" and event == "C":
            self.set_jc()
        elif self._state == "JC" and event == "J":
            self.set_j()
        elif self._state == "JC" and event == "C":
            self.set_jcc()
        elif self._state == "JCC" and event:
            self.set_j()
        else:
            self.set_j()
