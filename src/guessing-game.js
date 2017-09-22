class GuessingGame {
    constructor() {   		//функция constructor запускается при создании new GuessingGame
		this.min = 0;
		this.max = 0;
		this.candidateNumber = 0;
	}
							// методы, которые записываются в GuessingGame.prototype
    setRange(min, max) {	// принимаем минимальные и максимальные значения диапазона для угадывания
		this.min = min;
		this.max = max;
    }

    guess() {  				// предполагаем кандидата и возвращаем значение предполагаемого кандидата 
		this.candidateNumber = Math.floor((this.min+this.max)/2);	// для предположения используем алгоритм бинарного поиска
		return this.candidateNumber;
    }

    lower() {				// если return this.candidateNumber больше чем ответ, то далее для предположения максимальное значение соответсвует кандидату
		this.max = this.candidateNumber;
    }

    greater() {				// если return this.candidateNumber меньше чем ответ, то далее для предположения минимальное значение соответсвует кандидату
		this.min = this.candidateNumber;
    }
}

module.exports = GuessingGame;
