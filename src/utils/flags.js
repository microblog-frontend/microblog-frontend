import Rox from 'rox-browser'

export const Flags = {
  sidebar: new Rox.Flag(false)
}

async function initRollout () {
  const options = {
  }

  Rox.register('default', Flags)
  await Rox.setup(process.env.VUE_APP_ROLLOUT_KEY, options)
}

initRollout().then(function () {
  console.log('Done loading Rollout')
})
