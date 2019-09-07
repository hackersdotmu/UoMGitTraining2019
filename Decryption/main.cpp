#include <iostream>
#include <ctime>
#include <cstdlib>
#include <string>

using namespace std;

string toBeDecrypted(string Word)
{
    string decrypted = "";//declaring empty string to store decrypted message

    for (int i = 1; i < Word.length(); i+=2)//main loop for decrypting
    {
        decrypted = decrypted + (char)( ( (Word[i+1] - 100) * (Word[0] - 100) ) + (Word[i] - 100));
    }

    return decrypted;
}
