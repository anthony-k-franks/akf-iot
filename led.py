import sys 
import RPi.GPIO as gpio
import time

gpio.setwarnings(False)

greenLed = 17
yellowLed = 13
redLed = 26

gpio.setmode(gpio.BCM)
gpio.setup(greenLed, gpio.OUT)
gpio.setup(yellowLed, gpio.OUT)
gpio.setup(redLed, gpio.OUT)

led = sys.argv[1]
toggle = sys.argv[2] 

#print(led)
#print(type(led))
#print(toggle)
#print(type(toggle))

if led == '0':
    if toggle == '0':
        gpio.output(greenLed, gpio.LOW)
    elif toggle == '1':
        gpio.output(greenLed, gpio.HIGH)
elif led == '1':
    if toggle == '0':
        gpio.output(yellowLed, gpio.LOW)
    elif toggle == '1':
        gpio.output(yellowLed, gpio.HIGH)
elif led == '2':
    if toggle == '0':
        gpio.output(redLed, gpio.LOW)
    elif toggle == '1':
        gpio.output(redLed, gpio.HIGH)