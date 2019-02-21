class Calculator
  attr_accessor :question
  def initialize(question)
    @question = question
  end

  def answer
    numbers = @question.scan(/-?\d+/)
    operator = @question.scan(/(plus|minus|multip|divid)/)[0][0]
    if operator == "plus"
      answer = numbers[0].to_f + numbers[1].to_f
    elsif operator == "minus"
      answer = numbers[0].to_f - numbers[1].to_f
    elsif operator == "multip"
      answer = numbers[0].to_f * numbers[1].to_f
    elsif operator == "divid"
      answer = numbers[0].to_f / numbers[1].to_f
    end
  end
end

require 'pry'
binding.pry
