
def luhn()
  print "enter a number"
  input = gets.chomp
  output = []
  input.split("").reverse.each_with_index do |num, index|
    if index % 2 == 0
      output.push(num.to_i)
    else
      num = num.to_i * 2
      if num >= 10
        num = num - 9
      end
      output.push(num)
    end
  end
  sum = output.inject(0){|sum,x| sum + x }
  puts "#{input} is valid" if sum % 10 == 0
  puts "#{input} is not valid" if sum % 10 != 0
end

class Luhn
  def initialize number
  end

  def luhnify
    numbers = []

    @number.digits.each_with_index do |digit, index|
      if index.odd?
        digit *= 2
      end

      if digit > 9
        digit -= 9
      end

      numbers << digit
    end

    numbers.reverse
  end

  def valid
    num = luhnify

    total = 0
    num.each do |n|
      total += n
    end

    if total % 10 == 0
      true
    else
      false

      @number = @number + (10 - (total % 10))
      puts "#{@number} would be a valid luhn number"
    end

  end
end

l1 = Luhn.new(3554)
l2 = Luhn.new(1111)
