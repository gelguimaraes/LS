var dnaTranscriber = require('./rna-transcription')

describe('RNA', function () {
  test('transcribing cytosine to guanine', function () {
    expect(dnaTranscriber.toRna('C')).toEqual('G')
  })

  test('transcribing guanine to cytosine', function () {
    expect(dnaTranscriber.toRna('G')).toEqual('C')
  })

  test('transcribing adenine to uracil', function () {
    expect(dnaTranscriber.toRna('A')).toEqual('U')
  })

  test('transcribing thymine to adenine', function () {
    expect(dnaTranscriber.toRna('T')).toEqual('A')
  })

  test('transcribing all dna nucleotides to their rna complements', function () {
    expect(dnaTranscriber.toRna('ACGTGGTCTTAA'))
      .toEqual('UGCACCAGAAUU')
  })
})
