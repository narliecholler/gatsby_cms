import React from 'react'
import { OuterTable, QuickLinkContainer } from './style'

const MusicTable = ({
  data,
}) => {

  const { music } = data

  return (
    <>
      <QuickLinkContainer>
        <p>Quick Link:</p>
        <a href='#Baroque/Classical'>Baroque/Classical</a>
        <a href='#Shows/Films'>Shows/Films</a>
        <a href='#Contemporary'>Contemporary</a>
        <a href='#FiddlerCello'>Fiddler Cello</a>
      </QuickLinkContainer>

      <OuterTable>
        {music.map(i => {
          return <div className="repertoireGenre">
            <div className="repertoireTitle" id={i.title.replace(' ', '')}>
              <p>{i.title}</p>
            </div>
            {
              i.list.map(q => {
                return <div className="repertoireCombination">
                  {q.artist !== '' && (
                    <div div className="repertoireArtist">
                      <p>{q.artist}</p>
                    </div>
                  )}
                  <div className="repertoireSongs">
                    {
                      q.songs.map(p => {
                        return <p>{p}</p>
                      })
                    }
                  </div>
                </div>
              })
            }
          </div>
        })
        }
      </OuterTable>
    </>
  )
}

export default MusicTable