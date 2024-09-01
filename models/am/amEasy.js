const quest = [
    {
        "Qid": 1,
        "Question": "What does Z-transform mainly deal with?",
        "Answers": { 
            "answer_a": "Discrete signals", 
            "answer_b": "Continuous signals", 
            "answer_c": "Complex numbers", 
            "answer_d": "Differential equations"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 2,
        "Question": "What is the Fourier Transform used for?",
        "Answers": { 
            "answer_a": "Analyzing frequency components of signals", 
            "answer_b": "Solving linear equations", 
            "answer_c": "Calculating areas", 
            "answer_d": "Determining roots of polynomials"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 3,
        "Question": "What is the Laplace Transform of 1?",
        "Answers": { 
            "answer_a": "1/s", 
            "answer_b": "s", 
            "answer_c": "1", 
            "answer_d": "s^2"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 4,
        "Question": "What does the real part of a complex number represent?",
        "Answers": { 
            "answer_a": "The horizontal component", 
            "answer_b": "The vertical component", 
            "answer_c": "Magnitude", 
            "answer_d": "Phase angle"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 5,
        "Question": "What is the Fourier Transform of a delta function?",
        "Answers": { 
            "answer_a": "1", 
            "answer_b": "0", 
            "answer_c": "Delta function", 
            "answer_d": "Sine wave"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 6,
        "Question": "In Z-transform, what does Z represent?",
        "Answers": { 
            "answer_a": "A complex variable", 
            "answer_b": "A real number", 
            "answer_c": "An integer", 
            "answer_d": "A frequency component"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 7,
        "Question": "What is the Laplace Transform of e^(-at)?",
        "Answers": { 
            "answer_a": "1 / (s + a)", 
            "answer_b": "1 / (s - a)", 
            "answer_c": "a / (s + 1)", 
            "answer_d": "1 / s"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 8,
        "Question": "What is the imaginary part of a complex number?",
        "Answers": { 
            "answer_a": "The vertical component", 
            "answer_b": "The horizontal component", 
            "answer_c": "Magnitude", 
            "answer_d": "Phase angle"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 9,
        "Question": "What does the Z-transform of a sequence x[n] give?",
        "Answers": { 
            "answer_a": "A function of a complex variable Z", 
            "answer_b": "A time-domain signal", 
            "answer_c": "A frequency-domain signal", 
            "answer_d": "An integral result"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 10,
        "Question": "What is the Fourier Transform of a constant?",
        "Answers": { 
            "answer_a": "Delta function", 
            "answer_b": "Constant", 
            "answer_c": "Zero", 
            "answer_d": "Sine wave"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 11,
        "Question": "What is the Laplace Transform of t?",
        "Answers": { 
            "answer_a": "1 / s^2", 
            "answer_b": "1 / s", 
            "answer_c": "s", 
            "answer_d": "s^2"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 12,
        "Question": "What is the standard form of a complex number?",
        "Answers": { 
            "answer_a": "a + bi", 
            "answer_b": "a - bi", 
            "answer_c": "a * bi", 
            "answer_d": "a / bi"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 13,
        "Question": "What does the Z-transform of a unit step function yield?",
        "Answers": { 
            "answer_a": "1 / (1 - Z^(-1))", 
            "answer_b": "1 / (1 + Z^(-1))", 
            "answer_c": "Z / (1 - Z)", 
            "answer_d": "1"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 14,
        "Question": "What is the Fourier Transform of a rectangular pulse?",
        "Answers": { 
            "answer_a": "Sinc function", 
            "answer_b": "Delta function", 
            "answer_c": "Constant", 
            "answer_d": "Exponential function"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 15,
        "Question": "What is the Laplace Transform of sin(at)?",
        "Answers": { 
            "answer_a": "a / (s^2 + a^2)", 
            "answer_b": "1 / (s^2 + a^2)", 
            "answer_c": "s / (s^2 + a^2)", 
            "answer_d": "a / s"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 16,
        "Question": "What does the magnitude of a complex number represent?",
        "Answers": { 
            "answer_a": "The distance from the origin", 
            "answer_b": "The angle with the real axis", 
            "answer_c": "The horizontal component", 
            "answer_d": "The vertical component"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 17,
        "Question": "What is the Z-transform of δ[n]?",
        "Answers": { 
            "answer_a": "1", 
            "answer_b": "n", 
            "answer_c": "Z", 
            "answer_d": "0"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 18,
        "Question": "What is the Fourier Transform of a cosine wave?",
        "Answers": { 
            "answer_a": "Two delta functions at positive and negative frequencies", 
            "answer_b": "A single delta function", 
            "answer_c": "A sinc function", 
            "answer_d": "A ramp function"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 19,
        "Question": "What is the Laplace Transform of cos(at)?",
        "Answers": { 
            "answer_a": "s / (s^2 + a^2)", 
            "answer_b": "a / (s^2 + a^2)", 
            "answer_c": "1 / (s^2 + a^2)", 
            "answer_d": "s^2 / (s^2 + a^2)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 20,
        "Question": "What is the imaginary unit denoted by?",
        "Answers": { 
            "answer_a": "i", 
            "answer_b": "j", 
            "answer_c": "k", 
            "answer_d": "1"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 21,
        "Question": "What is the Z-transform of a constant 1?",
        "Answers": { 
            "answer_a": "1 / (1 - Z^(-1))", 
            "answer_b": "1", 
            "answer_c": "Z", 
            "answer_d": "Z / (1 - Z)"
        },
        "correct_answer": "answer_b"
    },
    {
        "Qid": 22,
        "Question": "What is the Fourier Transform of a sine wave?",
        "Answers": { 
            "answer_a": "Two delta functions at positive and negative frequencies", 
            "answer_b": "A sinc function", 
            "answer_c": "A delta function", 
            "answer_d": "A step function"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 23,
        "Question": "What is the Laplace Transform of 1/t?",
        "Answers": { 
            "answer_a": "ln(s)", 
            "answer_b": "1 / s", 
            "answer_c": "1 / (s + 1)", 
            "answer_d": "s"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 24,
        "Question": "What is the conjugate of a complex number a + bi?",
        "Answers": { 
            "answer_a": "a - bi", 
            "answer_b": "a + bi", 
            "answer_c": "b - ai", 
            "answer_d": "b + ai"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 25,
        "Question": "What is the real part of 3 + 4i?",
        "Answers": { 
            "answer_a": "3", 
            "answer_b": "4", 
            "answer_c": "7", 
            "answer_d": "i"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 26,
        "Question": "What is the imaginary part of 5 - 2i?",
        "Answers": { 
            "answer_a": "-2", 
            "answer_b": "5", 
            "answer_c": "2", 
            "answer_d": "-5"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 27,
        "Question": "What is the Z-transform of the unit impulse function δ[n]?",
        "Answers": { 
            "answer_a": "1", 
            "answer_b": "n", 
            "answer_c": "Z", 
            "answer_d": "0"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 28,
        "Question": "What does the Laplace Transform of t^n equal?",
        "Answers": { 
            "answer_a": "n! / s^(n+1)", 
            "answer_b": "1 / s^n", 
            "answer_c": "s^n", 
            "answer_d": "1 / s"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 29,
        "Question": "What is the Fourier Transform of a constant 1?",
        "Answers": { 
            "answer_a": "Delta function", 
            "answer_b": "Sinc function", 
            "answer_c": "Constant", 
            "answer_d": "Zero"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 30,
        "Question": "What is the value of e^(iπ) + 1?",
        "Answers": { 
            "answer_a": "0", 
            "answer_b": "1", 
            "answer_c": "e^iπ", 
            "answer_d": "-1"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 31,
        "Question": "What is the Z-transform of a unit step function u[n]?",
        "Answers": { 
            "answer_a": "1 / (1 - Z^(-1))", 
            "answer_b": "Z / (1 - Z)", 
            "answer_c": "1", 
            "answer_d": "Z"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 32,
        "Question": "What is the Fourier Transform of a triangular pulse?",
        "Answers": { 
            "answer_a": "Sinc squared function", 
            "answer_b": "Delta function", 
            "answer_c": "Exponential function", 
            "answer_d": "Sinc function"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 33,
        "Question": "What is the Laplace Transform of cos(at) + sin(at)?",
        "Answers": { 
            "answer_a": "s / (s^2 + a^2) + a / (s^2 + a^2)", 
            "answer_b": "s / (s^2 - a^2) + a / (s^2 + a^2)", 
            "answer_c": "1 / (s^2 + a^2)", 
            "answer_d": "s^2 / (s^2 + a^2)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 34,
        "Question": "What is the magnitude of the complex number 3 + 4i?",
        "Answers": { 
            "answer_a": "5", 
            "answer_b": "7", 
            "answer_c": "4", 
            "answer_d": "3"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 35,
        "Question": "What is the phase angle of 1 + i?",
        "Answers": { 
            "answer_a": "π/4", 
            "answer_b": "π/2", 
            "answer_c": "π", 
            "answer_d": "0"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 36,
        "Question": "What is the Z-transform of x[n] = n?",
        "Answers": { 
            "answer_a": "Z / ( (Z-1)^2 )", 
            "answer_b": "1 / ( (Z-1)^2 )", 
            "answer_c": "Z / (Z - 1)", 
            "answer_d": "1 / (Z - 1)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 37,
        "Question": "What is the Fourier Transform of a delta function δ(t)?",
        "Answers": { 
            "answer_a": "1", 
            "answer_b": "0", 
            "answer_c": "δ(t)", 
            "answer_d": "Sinc function"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 38,
        "Question": "What is the Laplace Transform of e^(at) * cos(bt)?",
        "Answers": { 
            "answer_a": "(s - a) / ((s - a)^2 + b^2)", 
            "answer_b": "1 / (s - a)", 
            "answer_c": "(s + a) / ((s + a)^2 + b^2)", 
            "answer_d": "1 / (s^2 + b^2)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 39,
        "Question": "What is the real part of the complex number 7 - 5i?",
        "Answers": { 
            "answer_a": "7", 
            "answer_b": "-5", 
            "answer_c": "5", 
            "answer_d": "-7"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 40,
        "Question": "What is the imaginary part of 6 + 8i?",
        "Answers": { 
            "answer_a": "8", 
            "answer_b": "6", 
            "answer_c": "-6", 
            "answer_d": "-8"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 41,
        "Question": "What is the Z-transform of x[n] = 1?",
        "Answers": { 
            "answer_a": "1 / (1 - Z^(-1))", 
            "answer_b": "1", 
            "answer_c": "Z", 
            "answer_d": "0"
        },
        "correct_answer": "answer_b"
    },
    {
        "Qid": 42,
        "Question": "What is the Fourier Transform of a time-shifted function x(t - t0)?",
        "Answers": { 
            "answer_a": "X(f) * e^(-j2πft0)", 
            "answer_b": "X(f) / e^(-j2πft0)", 
            "answer_c": "X(f) * e^(j2πft0)", 
            "answer_d": "X(f)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 43,
        "Question": "What is the Laplace Transform of a unit step function u(t)?",
        "Answers": { 
            "answer_a": "1 / s", 
            "answer_b": "s", 
            "answer_c": "1 / (s + 1)", 
            "answer_d": "s^2"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 44,
        "Question": "What is the magnitude of the complex number 2 - 2i?",
        "Answers": { 
            "answer_a": "2√2", 
            "answer_b": "2", 
            "answer_c": "4", 
            "answer_d": "√2"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 45,
        "Question": "What is the phase angle of 1 - i?",
        "Answers": { 
            "answer_a": "-π/4", 
            "answer_b": "π/4", 
            "answer_c": "π/2", 
            "answer_d": "-π/2"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 46,
        "Question": "What is the Z-transform of x[n] = δ[n-1]?",
        "Answers": { 
            "answer_a": "Z^(-1)", 
            "answer_b": "Z", 
            "answer_c": "1", 
            "answer_d": "0"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 47,
        "Question": "What is the Fourier Transform of a pulse of width T?",
        "Answers": { 
            "answer_a": "T * sinc(fT)", 
            "answer_b": "sinc(T)", 
            "answer_c": "1 / T", 
            "answer_d": "T"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 48,
        "Question": "What is the Laplace Transform of t^n * e^(-at)?",
        "Answers": { 
            "answer_a": "n! / (s + a)^(n+1)", 
            "answer_b": "n! / (s - a)^(n+1)", 
            "answer_c": "1 / (s + a)", 
            "answer_d": "n! / s^(n+1)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 49,
        "Question": "What is the real part of 2i?",
        "Answers": { 
            "answer_a": "0", 
            "answer_b": "2", 
            "answer_c": "i", 
            "answer_d": "1"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 50,
        "Question": "What is the imaginary part of 5 + 6i?",
        "Answers": { 
            "answer_a": "6", 
            "answer_b": "5", 
            "answer_c": "-6", 
            "answer_d": "i"
        },
        "correct_answer": "answer_a"
    }
]
 
module.exports = quest