import RPi.GPIO as gpio
import time

greenLed = 17
yellowLed = 13
redLed = 26

gpio.setmode(gpio.BCM)
gpio.setup(greenLed, gpio.OUT)
gpio.setup(yellowLed, gpio.OUT)
gpio.setup(redLed, gpio.OUT)
gpio.output(greenLed, gpio.LOW)
gpio.output(greenLed, gpio.HIGH)
time.sleep(0.075)
gpio.output(greenLed, gpio.LOW)
time.sleep(0.075)
gpio.output(yellowLed, gpio.LOW)
gpio.output(yellowLed, gpio.HIGH)
time.sleep(0.075)
gpio.output(yellowLed, gpio.LOW)
time.sleep(0.075)
gpio.output(redLed, gpio.LOW)
gpio.output(redLed, gpio.HIGH)
time.sleep(0.075)
gpio.output(redLed, gpio.LOW)

#while 1:
#    gpio.output(ledPin, gpio.LOW)
#    time.sleep(0.075)
#    gpio.output(ledPin, gpio.HIGH)
#    time.sleep(0.075)
