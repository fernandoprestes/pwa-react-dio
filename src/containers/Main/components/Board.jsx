import React, { memo } from 'react'
import { Grid, Skeleton } from '../../../components/components/'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, deathsPerOneMillion,  recovered, deaths, todayCases, totalTests } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayCases)} label="Casos hoje" color="#d41841" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deaths)} label="Total de mortos" color="#020202" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deathsPerOneMillion)} label="Óbitos por milhões de habitantes" color="#f7cb0a" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="#67C887" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(totalTests)} label="Total de testes" color="#841adb" />
      </Grid>
    </Grid>
  )
}

export default memo(Board)