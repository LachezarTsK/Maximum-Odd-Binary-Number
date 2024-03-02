
class Solution {

public:
    string maximumOddBinaryNumber(string& input) const {
        int numberOfBitsSetToOne = 0;
        
        for (const auto& bit : input) {
            numberOfBitsSetToOne += bit - '0';
        }

        for (int i = 0; i < numberOfBitsSetToOne - 1; ++i) {
            input[i] = '1';
        }
        for (int i = numberOfBitsSetToOne - 1; i < input.length(); ++i) {
            input[i] = '0';
        }
        input[input.length() - 1] = '1';

        return input;
    }
};
