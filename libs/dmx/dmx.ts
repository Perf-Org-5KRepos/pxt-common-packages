/**
 * DMX protocol functions.
 */
//% weight=100 color="#0078d7" icon="\uf185"
namespace dmx {

    /**
     * Send a DMX buffer to the specified digital pin
     * @param pin The pin that the neopixels are connected to
     * @param buf The buffer to send to the pin
     */
    //% shim=dmx::sendBuffer
    export function sendBuffer(pin: DigitalInOutPin, buf: Buffer): void {
        return;
    }
}