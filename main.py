step = 0

def on_button_pressed_a():
    basic.show_number(step)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global step
    step += 1
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
