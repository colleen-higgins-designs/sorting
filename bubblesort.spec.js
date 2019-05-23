describe('Bubble Sort', function(){

  beforeEach(function() {
    spyOn(sortingObj, 'swap').and.callThrough();
  });

  it('it is a function', function(){
    expect(typeof sortingObj.bubbleSort).toEqual('function');
  });
  it('handles an empty array', function(){
    expect( sortingObj.bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array with one value', function(){
    expect( sortingObj.bubbleSort([1]) ).toEqual([1]);
  });
  it('can sort an array with two items', function(){
    const sortedArray = sortingObj.bubbleSort([2, 1])
    expect( sortedArray ).toEqual([1, 2]);
    expect( sortingObj.swap.calls.count()).toEqual(1);
  });
  it('can sort an array with three items', function(){
    const sortedArray = sortingObj.bubbleSort([3, 2, 1])
    expect(sortedArray ).toEqual([1, 2, 3]);
    expect( sortingObj.swap.calls.count()).toEqual(3);
  });
  it('can sort an array with many items', function(){
    expect( sortingObj.bubbleSort([8, 1, 4, 6, 3, 7, 2, 5])).toEqual([1, 2, 3, 4, 5 ,6 ,7, 8]);
  });
  it('can sort an array with negative items', function(){
    expect( sortingObj.bubbleSort([8, 1, 4, -6, 3, 7, -2, 5])).toEqual([-6, -2, 1, 3, 4, 5, 7, 8]);
  });
  it('can sort an array with duplicate items', function(){
    const sortedArray = sortingObj.bubbleSort([8, 1, 4, 6, 3, 7, 2, 5, 2, 7, 2])
    expect( sortedArray).toEqual([1, 2, 2, 2, 3, 4, 5, 6, 7, 7, 8]);
    expect( sortingObj.swap.calls.count() ).toEqual(52);
  });
});
