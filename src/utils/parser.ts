export const parseExpression = (expression: string): number => {
    // Напишите ваш парсер и калькулятор тут
    // Обработка операций +, -, *, /, √, % и скобок
    // Пример простого парсера (расширьте его для поддержания всех операций)
  
    // Example: This is a placeholder for a proper expression parser
    const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
    try {
      // A simple evaluation using Function constructor (do not use eval)
      const result = new Function('return ' + sanitizedExpression)();
      if (typeof result !== 'number' || isNaN(result)) {
        throw new Error('Invalid calculation');
      }
      return result;
    } catch (error) {
      throw new Error('Invalid expression');
    }
  };
  