using System.Collections;
using System.Collections.Generic;

namespace crypto_lab1.Models 
{
    public class FrequencyAnalizator {
        public FrequencyAnalizator(IncomingData data) {
            alphabet = data.alphabet;
            cryptedText = data.cryptedText;
        }
        public Dictionary<char, double> getFrequencyTable() {
            Dictionary<char, double> freqTable = createTablePattern();
            int textLength = cryptedText.Length;
            foreach(char ch in cryptedText) {
                freqTable[ch] += 1/textLength;
            }
            return freqTable;
        }
        public Dictionary<char, double> createTablePattern() {
            Dictionary<char, double> result = new Dictionary<char, double>();
            foreach(char ch in alphabet) {
                result[ch] = 0;
            }
            return result;
        }
        private string alphabet, cryptedText;
    }
}