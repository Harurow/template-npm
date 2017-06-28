import { expect } from 'chai'
import { fizzBuzz } from '../src/index'

describe('fizz-buzz', () => {
    it('1', () => {
        expect(fizzBuzz(1)).to.equal(1)
    })
    it('2', () => {
        expect(fizzBuzz(2)).to.equal(3)
    })
    it('15', () => {
        expect(fizzBuzz(15)).to.equal(60)
    })
    it('100', () => {
        expect(fizzBuzz(100)).to.equal(2632)
    })
})

describe('fizz-buzz2', () => {
    it('1', () => {
        expect(fizzBuzz(1)).to.equal(1)
    })
    it('2', () => {
        expect(fizzBuzz(2)).to.equal(3)
    })
    it('15', () => {
        expect(fizzBuzz(15)).to.equal(60)
    })
    it('100', () => {
        expect(fizzBuzz(100)).to.equal(2632)
    })
})
