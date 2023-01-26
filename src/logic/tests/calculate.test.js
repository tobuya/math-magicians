import calculate from '../calculate';

const obj = { total: null, next: null, operation: null };

describe('Test Calculator functioning', () => {
  it('Clear All when AC button is clicked', () => {
    expect(calculate(obj, 'AC')).toEqual(obj);
  });

  it('When zero button is clicked and next value is zero, return an object with null or zero values.', () => {
    expect(calculate(obj, '0')).toEqual({ next: '0', total: null });
  });

  it('When there is an operation, update next', () => {
    const operationObj = { ...obj, next: '5', operation: '-' };
    expect(calculate(operationObj, '7')).toEqual({ ...operationObj, next: `${operationObj.next}7` });
  });

  it('When there is no operation, update next and clear the value', () => {
    expect(calculate(obj, '5')).toEqual({ next: '5', total: null });
  });

  it('When the button clicked is a dot', () => {
    expect(calculate(obj, '.')).toEqual({ next: '0.', operation: null, total: null });
  });

  it('When the button clicked is =', () => {
    const operationObj = {
      ...obj, next: '2', total: '7', operation: '-',
    };
    const returnObj = {
      ...operationObj, next: null, total: '5', operation: null,
    };
    expect(calculate(operationObj, '=')).toEqual(returnObj);
  });

  it('Do nothing when next value or the operation is missing', () => {
    const operationObj = {
      ...obj, next: null, operation: '+', total: '8',
    };
    expect(calculate(operationObj, '=')).toEqual({});
  });

  it("When a user press an operation after pressing '='", () => {
    const operationObj = { ...obj, total: '25' };
    expect(calculate(operationObj, '-')).toEqual({ ...obj, operation: '-', total: '25' });
  });
});
