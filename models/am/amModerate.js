const quest = [
    {
        "Qid": 1,
        "Question": "What is the inverse Z-transform of 1 / (1 - Z^(-1))?",
        "Answers": { 
            "answer_a": "u[n]", 
            "answer_b": "δ[n]", 
            "answer_c": "n", 
            "answer_d": "1"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 2,
        "Question": "What is the Laplace Transform of e^(at) * t^n?",
        "Answers": { 
            "answer_a": "n! / (s - a)^(n+1)", 
            "answer_b": "n! / s^(n+1)", 
            "answer_c": "1 / (s - a)", 
            "answer_d": "1 / (s + a)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 3,
        "Question": "What is the Fourier Transform of e^(-at)?",
        "Answers": { 
            "answer_a": "1 / (a + jω)", 
            "answer_b": "1 / (a - jω)", 
            "answer_c": "a / (a^2 + ω^2)", 
            "answer_d": "jω / (a^2 + ω^2)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 4,
        "Question": "What is the magnitude of the complex number 1 + j√3?",
        "Answers": { 
            "answer_a": "2", 
            "answer_b": "√2", 
            "answer_c": "2√3", 
            "answer_d": "√4"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 5,
        "Question": "What is the Z-transform of x[n] = 2^n?",
        "Answers": { 
            "answer_a": "1 / (1 - 2Z^(-1))", 
            "answer_b": "1 / (1 - 2Z)", 
            "answer_c": "Z / (Z - 2)", 
            "answer_d": "1 / (1 - 2Z)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 6,
        "Question": "What is the Laplace Transform of cos(at)?",
        "Answers": { 
            "answer_a": "s / (s^2 + a^2)", 
            "answer_b": "a / (s^2 + a^2)", 
            "answer_c": "1 / (s + a)", 
            "answer_d": "s / (s^2 - a^2)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 7,
        "Question": "What is the Fourier Transform of a rectangular pulse?",
        "Answers": { 
            "answer_a": "sinc function", 
            "answer_b": "Delta function", 
            "answer_c": "Exponential function", 
            "answer_d": "Rectangular function"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 8,
        "Question": "What is the inverse Laplace Transform of 1 / (s^2 + 4)?",
        "Answers": { 
            "answer_a": "sin(2t)", 
            "answer_b": "cos(2t)", 
            "answer_c": "e^(-2t)", 
            "answer_d": "2t"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 9,
        "Question": "What is the phase angle of 1 - j1?",
        "Answers": { 
            "answer_a": "-π/4", 
            "answer_b": "π/4", 
            "answer_c": "π/2", 
            "answer_d": "-π/2"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 10,
        "Question": "What is the Z-transform of x[n] = n^2?",
        "Answers": { 
            "answer_a": "Z / ( (Z-1)^3 )", 
            "answer_b": "Z^2 / ( (Z-1)^3 )", 
            "answer_c": "1 / ( (Z-1)^2 )", 
            "answer_d": "1 / ( (Z-1)^3 )"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 11,
        "Question": "What is the Laplace Transform of t * e^(at)?",
        "Answers": { 
            "answer_a": "1 / (s - a)^2", 
            "answer_b": "1 / (s + a)^2", 
            "answer_c": "1 / (s - a)", 
            "answer_d": "1 / (s^2 + a^2)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 12,
        "Question": "What is the Fourier Transform of a sinc function?",
        "Answers": { 
            "answer_a": "rectangular function", 
            "answer_b": "exponential function", 
            "answer_c": "delta function", 
            "answer_d": "triangular function"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 13,
        "Question": "What is the magnitude of 4 - j3?",
        "Answers": { 
            "answer_a": "5", 
            "answer_b": "7", 
            "answer_c": "√13", 
            "answer_d": "√25"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 14,
        "Question": "What is the inverse Z-transform of 1 / (1 - 0.5Z^(-1))?",
        "Answers": { 
            "answer_a": "0.5^n", 
            "answer_b": "1.5^n", 
            "answer_c": "0.5^(-n)", 
            "answer_d": "1"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 15,
        "Question": "What is the Laplace Transform of sin(at)?",
        "Answers": { 
            "answer_a": "a / (s^2 + a^2)", 
            "answer_b": "s / (s^2 + a^2)", 
            "answer_c": "1 / (s^2 + a^2)", 
            "answer_d": "s / (s + a)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 16,
        "Question": "What is the Fourier Transform of a Dirac delta function δ(t)?",
        "Answers": { 
            "answer_a": "1", 
            "answer_b": "sinc function", 
            "answer_c": "rectangular function", 
            "answer_d": "exponential function"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 17,
        "Question": "What is the phase angle of 3 + j4?",
        "Answers": { 
            "answer_a": "arctan(4/3)", 
            "answer_b": "arctan(3/4)", 
            "answer_c": "π/4", 
            "answer_d": "π/2"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 18,
        "Question": "What is the Z-transform of x[n] = δ[n-2]?",
        "Answers": { 
            "answer_a": "Z^(-2)", 
            "answer_b": "Z^2", 
            "answer_c": "1", 
            "answer_d": "Z"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 19,
        "Question": "What is the Laplace Transform of e^(-2t) * sin(3t)?",
        "Answers": { 
            "answer_a": "3 / ((s + 2)^2 + 9)", 
            "answer_b": "3 / ((s - 2)^2 + 9)", 
            "answer_c": "3 / (s^2 + 9)", 
            "answer_d": "3 / (s^2 - 9)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 20,
        "Question": "What is the Fourier Transform of a Gaussian function?",
        "Answers": { 
            "answer_a": "Gaussian function", 
            "answer_b": "Exponential function", 
            "answer_c": "Sinc function", 
            "answer_d": "Delta function"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 21,
        "Question": "What is the magnitude of -3 + 4i?",
        "Answers": { 
            "answer_a": "5", 
            "answer_b": "7", 
            "answer_c": "√25", 
            "answer_d": "√13"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 22,
        "Question": "What is the Z-transform of x[n] = 3 * δ[n] - 2 * δ[n-1]?",
        "Answers": { 
            "answer_a": "3 - 2Z^(-1)", 
            "answer_b": "3 - 2Z", 
            "answer_c": "3Z - 2", 
            "answer_d": "3Z^(-1) - 2"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 23,
        "Question": "What is the Laplace Transform of t^2 * e^(3t)?",
        "Answers": { 
            "answer_a": "2 / (s - 3)^3", 
            "answer_b": "2 / (s + 3)^3", 
            "answer_c": "2 / (s^2 + 9)", 
            "answer_d": "2 / (s + 3)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 24,
        "Question": "What is the Fourier Transform of a sinusoidal function cos(ω0t)?",
        "Answers": { 
            "answer_a": "π[δ(ω - ω0) + δ(ω + ω0)]", 
            "answer_b": "2π[δ(ω - ω0)]", 
            "answer_c": "π[δ(ω - ω0)]", 
            "answer_d": "π[δ(ω + ω0)]"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 25,
        "Question": "What is the phase angle of 5 + j5?",
        "Answers": { 
            "answer_a": "π/4", 
            "answer_b": "π/2", 
            "answer_c": "π/3", 
            "answer_d": "π/6"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 26,
        "Question": "What is the Z-transform of x[n] = 2n * u[n]?",
        "Answers": { 
            "answer_a": "2 / ( (1 - Z^(-1))^2 )", 
            "answer_b": "2 / (1 - Z^(-1))", 
            "answer_c": "2 / (1 - Z)^2", 
            "answer_d": "2 / (1 + Z^(-1))"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 27,
        "Question": "What is the Laplace Transform of t * e^(-3t)?",
        "Answers": { 
            "answer_a": "1 / (s + 3)^2", 
            "answer_b": "1 / (s - 3)^2", 
            "answer_c": "1 / (s + 3)", 
            "answer_d": "1 / (s^2 + 9)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 28,
        "Question": "What is the Fourier Transform of e^(-|t|)?",
        "Answers": { 
            "answer_a": "2 / (1 + ω^2)", 
            "answer_b": "2 / (1 - ω^2)", 
            "answer_c": "1 / (1 + ω^2)", 
            "answer_d": "1 / (1 - ω^2)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 29,
        "Question": "What is the magnitude of -1 + j√3?",
        "Answers": { 
            "answer_a": "2", 
            "answer_b": "√2", 
            "answer_c": "√4", 
            "answer_d": "2√3"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 30,
        "Question": "What is the Z-transform of x[n] = 1 + 2n?",
        "Answers": { 
            "answer_a": "1 / (1 - Z^(-1)) + 2Z / ( (Z - 1)^2 )", 
            "answer_b": "1 / (1 - Z) + 2Z / ( (Z + 1)^2 )", 
            "answer_c": "1 / (1 - Z) + 2 / ( (Z - 1)^2 )", 
            "answer_d": "1 / (1 + Z) + 2 / ( (Z - 1)^2 )"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 31,
        "Question": "What is the Laplace Transform of e^(2t) * cos(t)?",
        "Answers": { 
            "answer_a": "(s - 2) / ((s - 2)^2 + 1)", 
            "answer_b": "(s + 2) / ((s + 2)^2 + 1)", 
            "answer_c": "1 / ((s - 2)^2 + 1)", 
            "answer_d": "(s + 1) / ((s + 1)^2 + 1)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 32,
        "Question": "What is the Fourier Transform of a triangular function?",
        "Answers": { 
            "answer_a": "sinc^2 function", 
            "answer_b": "rectangular function", 
            "answer_c": "exponential function", 
            "answer_d": "delta function"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 33,
        "Question": "What is the phase angle of 7 - j24?",
        "Answers": { 
            "answer_a": "-1.18", 
            "answer_b": "1.18", 
            "answer_c": "-0.85", 
            "answer_d": "0.85"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 34,
        "Question": "What is the Z-transform of x[n] = 1 / (n + 1)?",
        "Answers": { 
            "answer_a": "1 / (1 - Z^(-1))", 
            "answer_b": "Z / (Z - 1)^2", 
            "answer_c": "Z / (Z - 1)", 
            "answer_d": "1 / (1 - Z^(-1))^2"
        },
        "correct_answer": "answer_d"
    },
    {
        "Qid": 35,
        "Question": "What is the Laplace Transform of 1 / (s + 1)?",
        "Answers": { 
            "answer_a": "e^(-t)", 
            "answer_b": "e^(t)", 
            "answer_c": "1 - e^(-t)", 
            "answer_d": "t * e^(-t)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 36,
        "Question": "What is the Fourier Transform of a periodic function?",
        "Answers": { 
            "answer_a": "Discrete Fourier Series", 
            "answer_b": "sinc function", 
            "answer_c": "exponential function", 
            "answer_d": "delta function"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 37,
        "Question": "What is the magnitude of 6 - 8i?",
        "Answers": { 
            "answer_a": "10", 
            "answer_b": "√20", 
            "answer_c": "√100", 
            "answer_d": "8"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 38,
        "Question": "What is the Z-transform of x[n] = cos(ωn)?",
        "Answers": { 
            "answer_a": "(Z - cos(ω)) / (Z^2 - 2 * cos(ω) * Z + 1)", 
            "answer_b": "(Z - sin(ω)) / (Z^2 - 2 * sin(ω) * Z + 1)", 
            "answer_c": "(Z + cos(ω)) / (Z^2 + 2 * cos(ω) * Z + 1)", 
            "answer_d": "(Z + sin(ω)) / (Z^2 + 2 * sin(ω) * Z + 1)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 39,
        "Question": "What is the Laplace Transform of e^(3t) * sin(2t)?",
        "Answers": { 
            "answer_a": "2 / ((s - 3)^2 + 4)", 
            "answer_b": "2 / ((s + 3)^2 + 4)", 
            "answer_c": "2 / (s^2 + 4)", 
            "answer_d": "2 / (s - 3)^2"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 40,
        "Question": "What is the Fourier Transform of a delta function δ(t - t0)?",
        "Answers": { 
            "answer_a": "e^(-jωt0)", 
            "answer_b": "e^(jωt0)", 
            "answer_c": "1 / t0", 
            "answer_d": "jωt0"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 41,
        "Question": "What is the phase angle of -5 - 12j?",
        "Answers": { 
            "answer_a": "-π - arctan(12/5)", 
            "answer_b": "π + arctan(12/5)", 
            "answer_c": "-π + arctan(5/12)", 
            "answer_d": "π - arctan(12/5)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 42,
        "Question": "What is the Z-transform of x[n] = 1 / (1 - 0.5Z^(-1))?",
        "Answers": { 
            "answer_a": "1 / (1 - 0.5Z^(-1))", 
            "answer_b": "1 / (1 - 0.5Z)", 
            "answer_c": "1 / (1 + 0.5Z^(-1))", 
            "answer_d": "1 / (1 + 0.5Z)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 43,
        "Question": "What is the Laplace Transform of e^(-t) * cos(4t)?",
        "Answers": { 
            "answer_a": "(s + 1) / ((s + 1)^2 + 16)", 
            "answer_b": "(s - 1) / ((s - 1)^2 + 16)", 
            "answer_c": "1 / ((s + 1)^2 + 16)", 
            "answer_d": "1 / ((s - 1)^2 + 16)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 44,
        "Question": "What is the Fourier Transform of a step function u(t)?",
        "Answers": { 
            "answer_a": "1 / jω + πδ(ω)", 
            "answer_b": "1 / (jω)", 
            "answer_c": "πδ(ω)", 
            "answer_d": "e^(-jωt)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 45,
        "Question": "What is the magnitude of 3 + 4i?",
        "Answers": { 
            "answer_a": "5", 
            "answer_b": "√13", 
            "answer_c": "√25", 
            "answer_d": "7"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 46,
        "Question": "What is the Z-transform of x[n] = sin(ωn)?",
        "Answers": { 
            "answer_a": "ω / ( (Z - e^(jω)) * (Z - e^(-jω)) )", 
            "answer_b": "ω / ( (Z - e^(jω)) * (Z + e^(-jω)) )", 
            "answer_c": "ω / ( (Z + e^(jω)) * (Z - e^(-jω)) )", 
            "answer_d": "ω / ( (Z - e^(jω)) * (Z - e^(-jω)) )"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 47,
        "Question": "What is the Laplace Transform of t * cos(t)?",
        "Answers": { 
            "answer_a": "(s * (s - 1)) / ((s^2 + 1)^2)", 
            "answer_b": "(s^2 - 1) / ((s^2 + 1)^2)", 
            "answer_c": "(s - 1) / (s^2 + 1)", 
            "answer_d": "(s * (s + 1)) / ((s^2 + 1)^2)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 48,
        "Question": "What is the Fourier Transform of a rectangular pulse of width T?",
        "Answers": { 
            "answer_a": "T * sinc(ωT)", 
            "answer_b": "T / sinc(ωT)", 
            "answer_c": "1 / sinc(ωT)", 
            "answer_d": "1 / (T * sinc(ωT))"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 49,
        "Question": "What is the phase angle of 8 + 15j?",
        "Answers": { 
            "answer_a": "arctan(15/8)", 
            "answer_b": "arctan(8/15)", 
            "answer_c": "π/4", 
            "answer_d": "π/3"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 50,
        "Question": "What is the Z-transform of x[n] = a^n * u[n]?",
        "Answers": { 
            "answer_a": "1 / (1 - aZ^(-1))", 
            "answer_b": "1 / (1 - aZ)", 
            "answer_c": "a / (1 - aZ^(-1))", 
            "answer_d": "a / (1 - aZ)"
        },
        "correct_answer": "answer_a"
    }
]

module.exports = quest