function loadScript (url) {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = url
    script.onload = resolve
    document.body.appendChild(script)
  })
}

async function loadAllScripts (urls) {
  for (let url of urls) {
    console.log(url)
    await loadScript(url)
  }
}

function loadWeb3 (url) {
  const script = document.createElement('script')
  script.src = url
  document.body.appendChild(script)
}

$(function(){

  const args = {}
  document.location.search.substring(1).split('&').forEach((s) => {
    let [name, value] = s.split('=')
    args[name] = decodeURIComponent(value)
  })

  const web3Version = args['web3']
  console.log('web3 version', web3Version)

  if (web3Version) {
    const web3Url = 'https://piyolab.github.io/sushiether/web3.js/libs/web3.js_v' + web3Version + '/web3.min.js'
    loadWeb3(web3Url)
  }

  const codelist = args['code']

  console.log('codelist', codelist)

  if (codelist) {
    let urls = codelist.split(/,/)
    loadAllScripts(urls)
  }
})
