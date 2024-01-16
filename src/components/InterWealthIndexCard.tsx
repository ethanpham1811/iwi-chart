import withCard from '@/HOCs/withCard'
import { TDataSet } from '@/constants/types'
import BarChart from './BarChart'

const InterWealthIndex = () => {
  const dataset: TDataSet[] = [
    {
      dimensions: ['%', 'IWI'],
      source: [
        { '%': 12, IWI: 4 },
        { '%': 20, IWI: 17 },
        { '%': 29, IWI: 49 },
        { '%': 37, IWI: 82 },
        { '%': 46, IWI: 49 },
        { '%': 54, IWI: 17 },
        { '%': 100, IWI: 7 }
      ]
    }
  ]

  const avg = (dataset[0].source.reduce((acc, cur) => acc + cur.IWI, 0) / dataset[0].source.length).toFixed(1)

  return (
    <section className="flex flex-col font-semibold gap-4">
      {/* header */}
      <div>
        <h1 className="text-2xl">International wealth index (IWI)</h1>
      </div>

      {/* chart wrapper */}
      <div className="flex items-center gap-5">
        <div className="flex-1">
          <BarChart dataset={dataset} xName="IWI Score (0-100)" />
        </div>
        <div className="flex-col flex px-2">
          <h2 className="text-xl">Avg.</h2>
          <h2 className="text-gray-dark mb-1 text-xl">Unit</h2>
          <h3 className="text-5xl font-bold text-green-light">{avg}</h3>
        </div>
      </div>
    </section>
  )
}

const InterWealthIndexCard = withCard(InterWealthIndex)
export default InterWealthIndexCard
