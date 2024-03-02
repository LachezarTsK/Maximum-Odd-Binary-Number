
public class Solution {

    public String maximumOddBinaryNumber(String input) {
        int numberOfBitsSetToOne = 0;
        char[] bits = input.toCharArray();
        for (int bit : bits) {
            numberOfBitsSetToOne += bit - '0';
        }

        for (int i = 0; i < numberOfBitsSetToOne - 1; ++i) {
            bits[i] = '1';
        }
        for (int i = numberOfBitsSetToOne - 1; i < bits.length; ++i) {
            bits[i] = '0';
        }
        bits[bits.length - 1] = '1';

        return String.valueOf(bits);
    }
}
