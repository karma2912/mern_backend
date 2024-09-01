const quest = [
    {
        "Qid": 1,
        "Question": "What is the Z-transform of x[n] = n * u[n] * (0.5)^n?",
        "Answers": { 
            "answer_a": "1 / (1 - 0.5Z^(-1))^2", 
            "answer_b": "Z / (Z - 0.5)^2", 
            "answer_c": "1 / (1 - 0.5Z)^2", 
            "answer_d": "1 / (1 - 0.5Z^2)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 2,
        "Question": "What is the Laplace Transform of e^(-2t) * sin(3t)?",
        "Answers": { 
            "answer_a": "3 / ((s + 2)^2 + 9)", 
            "answer_b": "3 / ((s - 2)^2 + 9)", 
            "answer_c": "3 / ((s + 2)^2 - 9)", 
            "answer_d": "3 / ((s - 2)^2 - 9)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 3,
        "Question": "What is the Fourier Transform of a delta function δ(t - T)?",
        "Answers": { 
            "answer_a": "e^(-jωT)", 
            "answer_b": "e^(jωT)", 
            "answer_c": "πδ(ω - T)", 
            "answer_d": "πδ(ω + T)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 4,
        "Question": "What is the inverse Laplace Transform of 1 / (s^2 + 4s + 5)?",
        "Answers": { 
            "answer_a": "e^(-2t) * sin(t)", 
            "answer_b": "e^(-2t) * cos(t)", 
            "answer_c": "e^(2t) * sin(t)", 
            "answer_d": "e^(2t) * cos(t)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 5,
        "Question": "What is the Z-transform of x[n] = (2^n - 3^n) * u[n]?",
        "Answers": { 
            "answer_a": "1 / (1 - 2Z^(-1)) - 1 / (1 - 3Z^(-1))", 
            "answer_b": "1 / (1 - 2Z) - 1 / (1 - 3Z)", 
            "answer_c": "1 / (1 - 2Z) - 1 / (1 - 3Z^(-1))", 
            "answer_d": "1 / (1 + 2Z) - 1 / (1 + 3Z)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 6,
        "Question": "What is the Fourier Transform of a rectangular pulse of width T?",
        "Answers": { 
            "answer_a": "T * sinc(ωT)", 
            "answer_b": "T / sinc(ωT)", 
            "answer_c": "1 / (T * sinc(ωT))", 
            "answer_d": "1 / sinc(ωT)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 7,
        "Question": "What is the Laplace Transform of t^2 * e^(3t)?",
        "Answers": { 
            "answer_a": "2 / (s - 3)^3", 
            "answer_b": "2 / (s + 3)^3", 
            "answer_c": "2 / (s^2 - 9)", 
            "answer_d": "2 / (s + 3)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 8,
        "Question": "What is the phase angle of 4 + j4?",
        "Answers": { 
            "answer_a": "π/4", 
            "answer_b": "π/2", 
            "answer_c": "π/6", 
            "answer_d": "π/3"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 9,
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
        "Qid": 10,
        "Question": "What is the Laplace Transform of t * e^(-2t)?",
        "Answers": { 
            "answer_a": "1 / (s + 2)^2", 
            "answer_b": "1 / (s - 2)^2", 
            "answer_c": "1 / (s + 2)", 
            "answer_d": "1 / (s^2 + 4)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 11,
        "Question": "What is the inverse Fourier Transform of 1 / (1 + ω^2)?",
        "Answers": { 
            "answer_a": "e^(-|t|)", 
            "answer_b": "e^(t)", 
            "answer_c": "e^(t^2)", 
            "answer_d": "e^(-t^2)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 12,
        "Question": "What is the Z-transform of x[n] = δ[n - 1] + δ[n - 2]?",
        "Answers": { 
            "answer_a": "Z^(-1) + Z^(-2)", 
            "answer_b": "Z + Z^2", 
            "answer_c": "Z^(-1) - Z^(-2)", 
            "answer_d": "Z^2 - Z^(-1)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 13,
        "Question": "What is the Laplace Transform of e^(5t) * cos(2t)?",
        "Answers": { 
            "answer_a": "(s - 5) / ((s - 5)^2 + 4)", 
            "answer_b": "(s + 5) / ((s + 5)^2 + 4)", 
            "answer_c": "1 / ((s - 5)^2 + 4)", 
            "answer_d": "1 / ((s + 5)^2 + 4)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 14,
        "Question": "What is the magnitude of -2 + j2?",
        "Answers": { 
            "answer_a": "2√2", 
            "answer_b": "2", 
            "answer_c": "√8", 
            "answer_d": "4"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 15,
        "Question": "What is the Z-transform of x[n] = n * (0.5)^n?",
        "Answers": { 
            "answer_a": "Z / ( (1 - 0.5Z)^2 )", 
            "answer_b": "1 / (1 - 0.5Z)", 
            "answer_c": "Z / (1 - 0.5Z)", 
            "answer_d": "1 / (1 + 0.5Z)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 16,
        "Question": "What is the Laplace Transform of sin^2(t)?",
        "Answers": { 
            "answer_a": "s / (s^2 + 1)^2", 
            "answer_b": "(s^2 - 1) / (s^2 + 1)^2", 
            "answer_c": "(s - 1) / (s^2 + 1)", 
            "answer_d": "(s + 1) / (s^2 + 1)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 17,
        "Question": "What is the phase angle of 3 - 4j?",
        "Answers": { 
            "answer_a": "-π/4", 
            "answer_b": "π/4", 
            "answer_c": "3π/4", 
            "answer_d": "-3π/4"
        },
        "correct_answer": "answer_d"
    },
    {
        "Qid": 18,
        "Question": "What is the Z-transform of x[n] = 1 - 2 * (0.5)^n?",
        "Answers": { 
            "answer_a": "1 / (1 - 0.5Z) - 2 / (1 - 0.5Z^2)", 
            "answer_b": "1 / (1 - 0.5Z) - 2 / (1 - 0.5Z)", 
            "answer_c": "1 / (1 - 0.5Z) - 2", 
            "answer_d": "1 - 2 / (1 - 0.5Z)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 19,
        "Question": "What is the Laplace Transform of e^(3t) * t^2?",
        "Answers": { 
            "answer_a": "2 / (s - 3)^3", 
            "answer_b": "2 / (s + 3)^3", 
            "answer_c": "2 / (s^3 - 27)", 
            "answer_d": "2 / (s^3 + 27)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 20,
        "Question": "What is the inverse Fourier Transform of 1 / (1 + ω^2)?",
        "Answers": { 
            "answer_a": "e^(-|t|)", 
            "answer_b": "e^(t)", 
            "answer_c": "e^(-t^2)", 
            "answer_d": "e^(t^2)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 21,
        "Question": "What is the Z-transform of x[n] = 2^n - 3^n?",
        "Answers": { 
            "answer_a": "1 / (1 - 2Z^(-1)) - 1 / (1 - 3Z^(-1))", 
            "answer_b": "1 / (1 - 2Z) - 1 / (1 - 3Z)", 
            "answer_c": "1 / (1 + 2Z) - 1 / (1 + 3Z)", 
            "answer_d": "1 / (1 - 2Z) - 1 / (1 + 3Z)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 22,
        "Question": "What is the Laplace Transform of e^(3t) * cos(2t)?",
        "Answers": { 
            "answer_a": "(s - 3) / ((s - 3)^2 + 4)", 
            "answer_b": "(s + 3) / ((s + 3)^2 + 4)", 
            "answer_c": "1 / ((s - 3)^2 + 4)", 
            "answer_d": "1 / ((s + 3)^2 + 4)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 23,
        "Question": "What is the magnitude of -3 + 4j?",
        "Answers": { 
            "answer_a": "5", 
            "answer_b": "7", 
            "answer_c": "√13", 
            "answer_d": "√25"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 24,
        "Question": "What is the Z-transform of x[n] = n * (0.5)^n * u[n]?",
        "Answers": { 
            "answer_a": "Z / ( (1 - 0.5Z)^2 )", 
            "answer_b": "1 / (1 - 0.5Z)", 
            "answer_c": "1 / (1 + 0.5Z)", 
            "answer_d": "1 / (1 - 0.5Z^2)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 25,
        "Question": "What is the Laplace Transform of cos^2(t)?",
        "Answers": { 
            "answer_a": "(s + 1) / (s^2 + 2s + 2)", 
            "answer_b": "(s - 1) / (s^2 - 2s + 2)", 
            "answer_c": "(s - 1) / (s^2 + 1)", 
            "answer_d": "(s + 1) / (s^2 + 1)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 26,
        "Question": "What is the phase angle of -5 + j12?",
        "Answers": { 
            "answer_a": "arctan(-12/5)", 
            "answer_b": "arctan(5/12)", 
            "answer_c": "arctan(12/5)", 
            "answer_d": "π - arctan(12/5)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 27,
        "Question": "What is the Z-transform of x[n] = 1 + 2^n?",
        "Answers": { 
            "answer_a": "1 / (1 - Z^(-1)) + 2 / (1 - 2Z^(-1))", 
            "answer_b": "1 / (1 - Z) + 2 / (1 - 2Z)", 
            "answer_c": "1 / (1 - Z) - 2 / (1 - 2Z^(-1))", 
            "answer_d": "1 - 2 / (1 - Z^(-1))"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 28,
        "Question": "What is the Laplace Transform of e^(-2t) * t^3?",
        "Answers": { 
            "answer_a": "6 / (s + 2)^4", 
            "answer_b": "6 / (s - 2)^4", 
            "answer_c": "6 / (s^4 + 16)", 
            "answer_d": "6 / (s^3 + 16)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 29,
        "Question": "What is the inverse Fourier Transform of 1 / (1 + ω^2)?",
        "Answers": { 
            "answer_a": "e^(-|t|)", 
            "answer_b": "e^(t)", 
            "answer_c": "e^(-t^2)", 
            "answer_d": "e^(t^2)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 30,
        "Question": "What is the Z-transform of x[n] = δ[n - 3] - δ[n - 5]?",
        "Answers": { 
            "answer_a": "Z^(-3) - Z^(-5)", 
            "answer_b": "Z^3 - Z^5", 
            "answer_c": "Z^(-3) + Z^(-5)", 
            "answer_d": "Z^3 + Z^5"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 31,
        "Question": "What is the Laplace Transform of e^(2t) * sin(3t)?",
        "Answers": { 
            "answer_a": "3 / ((s - 2)^2 + 9)", 
            "answer_b": "3 / ((s + 2)^2 + 9)", 
            "answer_c": "3 / ((s - 2)^2 - 9)", 
            "answer_d": "3 / ((s + 2)^2 - 9)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 32,
        "Question": "What is the magnitude of -7 - 24j?",
        "Answers": { 
            "answer_a": "25", 
            "answer_b": "7", 
            "answer_c": "24", 
            "answer_d": "√25"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 33,
        "Question": "What is the Z-transform of x[n] = n * sin(ωn)?",
        "Answers": { 
            "answer_a": "ω / ((Z - e^(jω)) * (Z - e^(-jω))^2)", 
            "answer_b": "ω / ((Z - e^(jω)) * (Z + e^(-jω))^2)", 
            "answer_c": "ω / (Z - e^(jω))", 
            "answer_d": "ω / (Z - e^(-jω))"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 34,
        "Question": "What is the Laplace Transform of sin(3t) / t?",
        "Answers": { 
            "answer_a": "arctan(3 / s)", 
            "answer_b": "1 / (s^2 + 9)", 
            "answer_c": "s / (s^2 + 9)", 
            "answer_d": "3 / (s^2 + 9)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 35,
        "Question": "What is the Fourier Transform of e^(-at) * u(t)?",
        "Answers": { 
            "answer_a": "1 / (s + a)", 
            "answer_b": "1 / (s - a)", 
            "answer_c": "a / (s + a)", 
            "answer_d": "a / (s - a)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 36,
        "Question": "What is the Z-transform of x[n] = e^(-αn) * u[n]?",
        "Answers": { 
            "answer_a": "1 / (1 - e^(-α) * Z^(-1))", 
            "answer_b": "1 / (1 - e^(-α) * Z)", 
            "answer_c": "1 / (1 + e^(-α) * Z^(-1))", 
            "answer_d": "1 / (1 + e^(-α) * Z)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 37,
        "Question": "What is the Laplace Transform of e^(-t) * cos(t)?",
        "Answers": { 
            "answer_a": "(s + 1) / ((s + 1)^2 + 1)", 
            "answer_b": "(s - 1) / ((s - 1)^2 + 1)", 
            "answer_c": "(s - 1) / ((s - 1)^2 - 1)", 
            "answer_d": "(s + 1) / ((s - 1)^2 + 1)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 38,
        "Question": "What is the phase angle of -4 - 3j?",
        "Answers": { 
            "answer_a": "-atan(3/4)", 
            "answer_b": "atan(4/3)", 
            "answer_c": "atan(3/4)", 
            "answer_d": "-atan(4/3)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 39,
        "Question": "What is the Z-transform of x[n] = n * (0.7)^n * u[n]?",
        "Answers": { 
            "answer_a": "Z / ( (1 - 0.7Z)^2 )", 
            "answer_b": "Z / ( (1 - 0.7)^2 )", 
            "answer_c": "1 / ( (1 - 0.7Z)^2 )", 
            "answer_d": "1 / ( (1 - 0.7)^2 )"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 40,
        "Question": "What is the Laplace Transform of e^(-t) * t^2?",
        "Answers": { 
            "answer_a": "2 / (s + 1)^3", 
            "answer_b": "2 / (s - 1)^3", 
            "answer_c": "2 / (s^2 + 1)", 
            "answer_d": "2 / (s^3 + 1)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 41,
        "Question": "What is the Fourier Transform of a sinc function?",
        "Answers": { 
            "answer_a": "rectangular pulse", 
            "answer_b": "Gaussian function", 
            "answer_c": "exponential function", 
            "answer_d": "triangular function"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 42,
        "Question": "What is the Z-transform of x[n] = (n + 1) * (0.5)^n?",
        "Answers": { 
            "answer_a": "Z / ( (1 - 0.5Z)^3 )", 
            "answer_b": "Z / ( (1 - 0.5Z)^2 )", 
            "answer_c": "1 / ( (1 - 0.5Z)^3 )", 
            "answer_d": "1 / ( (1 - 0.5Z)^2 )"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 43,
        "Question": "What is the Laplace Transform of sin^2(t) / t?",
        "Answers": { 
            "answer_a": "π / 2", 
            "answer_b": "1 / (s^2 + 4)", 
            "answer_c": "2 / (s^2 + 1)", 
            "answer_d": "π / (s^2 + 1)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 44,
        "Question": "What is the phase angle of 6 - j8?",
        "Answers": { 
            "answer_a": "-atan(4/3)", 
            "answer_b": "atan(4/3)", 
            "answer_c": "-atan(3/4)", 
            "answer_d": "atan(3/4)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 45,
        "Question": "What is the Z-transform of x[n] = δ[n - 2] + 2 * δ[n - 3]?",
        "Answers": { 
            "answer_a": "Z^(-2) + 2 * Z^(-3)", 
            "answer_b": "Z^2 + 2 * Z^3", 
            "answer_c": "Z^(-2) - 2 * Z^(-3)", 
            "answer_d": "Z^2 - 2 * Z^3"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 46,
        "Question": "What is the Laplace Transform of e^(3t) * sin(2t)?",
        "Answers": { 
            "answer_a": "2 / ((s - 3)^2 + 4)", 
            "answer_b": "2 / ((s + 3)^2 + 4)", 
            "answer_c": "2 / ((s - 3)^2 - 4)", 
            "answer_d": "2 / ((s + 3)^2 - 4)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 47,
        "Question": "What is the magnitude of -6 - 8j?",
        "Answers": { 
            "answer_a": "10", 
            "answer_b": "14", 
            "answer_c": "8", 
            "answer_d": "6"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 48,
        "Question": "What is the Z-transform of x[n] = cos(ωn) * u[n]?",
        "Answers": { 
            "answer_a": "(Z - cos(ω)) / (Z^2 - 2 * cos(ω) * Z + 1)", 
            "answer_b": "(Z + cos(ω)) / (Z^2 + 2 * cos(ω) * Z + 1)", 
            "answer_c": "(Z - sin(ω)) / (Z^2 - 2 * sin(ω) * Z + 1)", 
            "answer_d": "(Z + sin(ω)) / (Z^2 + 2 * sin(ω) * Z + 1)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 49,
        "Question": "What is the Laplace Transform of e^(2t) * cosh(t)?",
        "Answers": { 
            "answer_a": "(s - 2) / ((s - 2)^2 - 1)", 
            "answer_b": "(s + 2) / ((s + 2)^2 - 1)", 
            "answer_c": "1 / ((s - 2)^2 + 1)", 
            "answer_d": "1 / ((s + 2)^2 + 1)"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 50,
        "Question": "What is the inverse Z-transform of 1 / (1 - 0.5Z^(-1))?",
        "Answers": { 
            "answer_a": "(0.5)^n * u[n]", 
            "answer_b": "(0.5)^n", 
            "answer_c": "(0.5)^(-n) * u[n]", 
            "answer_d": "(0.5)^(-n)"
        },
        "correct_answer": "answer_a"
    }
]

module.exports = quest