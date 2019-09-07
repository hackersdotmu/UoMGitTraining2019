#include <iostream>
#include <ctime>
#include <cstdlib>
#include <string>

using namespace std;

string toBeEncrypted (string Text)
{
    int genKey, counter = 0, enResult[( (Text.length() ) *2)]; //declaring random key to encrypt, counter for loops, array to facilitate conversion on integer into char
    string Temp = ""; //declare empty string to be returned

    srand(time(0));//initialise rand

    genKey = ((rand() % 10) + 1);//get random number to encrypt

    Temp = Temp + (char)((genKey) + 100);//add encryption number as char (added 100 to prevent help encryption

    for (int i = 1; i <= ( (Text.length() ) *2 ); i+=2)//main loop for encrypting characters one at a time
    {
        enResult[i] = (((int)Text[counter]) % genKey);
        enResult[i+1] = (((int)Text[counter]) / genKey);
        counter++;
        Temp = Temp + (char)(enResult[i] + 100);
        Temp = Temp + (char)(enResult[i+1] + 100);
    }

    return Temp;//return the encrypted message
}
