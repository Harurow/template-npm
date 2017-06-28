import { expect } from 'chai'
import { fuga } from './'

describe('fuga', () => {
    it('1', () => {
        expect(fuga(1)).to.equal(1)
    })
    it('2', () => {
        expect(fuga(2)).to.equal(3)
    })
    it('15', () => {
        expect(fuga(15)).to.equal(60)
    })
    it('100', () => {
        expect(fuga(100)).to.equal(2632)
    })
})

describe('fuga2', () => {
    it('1', () => {
        expect(fuga(1)).to.equal(1)
    })
    it('2', () => {
        expect(fuga(2)).to.equal(3)
    })
    it('15', () => {
        expect(fuga(15)).to.equal(60)
    })
    it('100', () => {
        expect(fuga(100)).to.equal(2632)
    })
})
