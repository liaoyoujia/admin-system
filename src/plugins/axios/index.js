import http from './config'
export let getABData = (data) => {
  return http({ method: 'get', url: 'api/vhc-portal/report/v_h_c_count_report/getCountReportForSum', params: data })
}

export let getPriceAnalysis = (data) => {
  return http({
    method: 'get',
    url: `api/vhc-portal/report/v_h_c_count_report/getProReportForSum`,
    params: data
  })
}
export let getprojectData = (data) => {
  return http({
    url: `api/vhc-portal/report/v_h_c_count_report/getPriceReportByPro`,
    method: 'get',
    params: data
  })
}
export let getvhcData = (data) => {
  return http({
    url: `api/vhc-portal/report/v_h_c_count_report/getPriceReportByState`,
    method: 'get',
    params: data
  })
}
