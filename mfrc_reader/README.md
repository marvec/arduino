# Reading RFID tags via I2C

The Arduino device is set as a slave at address 0x44 on I2C. Upon reading from this address Arduino returns the last tags seen. 
It can store up to 16 tags before reading. After that, new tags are ignored.

When there is no new tag, just zeroes are returned.

Each reading must read 4 bytes at once which contain the RFID tag NUID.