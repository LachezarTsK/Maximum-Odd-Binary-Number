
using System;

public class Solution
{
    public string MaximumOddBinaryNumber(string input)
    {
        int numberOfBitsSetToOne = 0;
        char[] bits = input.ToCharArray();
        foreach (int bit in bits)
        {
            numberOfBitsSetToOne += bit - '0';
        }

        for (int i = 0; i < numberOfBitsSetToOne - 1; ++i)
        {
            bits[i] = '1';
        }
        for (int i = numberOfBitsSetToOne - 1; i < bits.Length; ++i)
        {
            bits[i] = '0';
        }
        bits[bits.Length - 1] = '1';

        return String.Join("", bits);
    }
}
