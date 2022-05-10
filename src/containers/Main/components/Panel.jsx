import React, { memo } from 'react'
import { Card, Typography, Button, Select, MenuItem } from '../../../components'
import COUNTRIES from '../../../commons/constants/countries.js'
import { CardPanelContentStyled, ItemStyled } from './style'

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, data, country, getCoviddata }) {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div className='seletor'>
          <img className='img' src={country.flag} alt={`País-${country.label}`} /> 
          <span className='text'>{country.label}</span>
        </div>
      </ItemStyled>
    </MenuItem>
  )

  const textCovid19 = `País: ${country} - recuperados: ${recovered}`

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://covid19dio.netlify.app/'
    })
  }

  const renderShareButton = (
    <div>
      <Button color="primary" variant="outlined" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button color="primary" variant="outlined" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )

  return (
    <Card>
      <CardPanelContentStyled className='panel' style={{background: 'transparent', boxShadow:'none'}}>
        <div>
          <Typography variant="h6" component="span" color="primary">Painel Coronavírus no Mercosul </Typography>
          <Typography variant="body1" component="span" color="primary">(atualizado em: {updateAt})</Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  )
}

export default memo(Panel)