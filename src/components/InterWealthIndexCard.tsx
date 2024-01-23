import withCard from '@/HOCs/withCard'
import { TDataSet } from '@/constants/types'
import BarChart from './BarChart'

const InterWealthIndex = () => {
  const dataset: TDataSet[] = [
    {
      dimensions: ['%', 'IWI1', 'IWI2', 'IWI3'],
      source: [
        { '%': 12, IWI1: 4, IWI2: 14, IWI3: 24 },
        { '%': 20, IWI1: 67, IWI2: 57, IWI3: 64 },
        { '%': 29, IWI1: 9, IWI2: 9, IWI3: 2 },
        { '%': 37, IWI1: 54, IWI2: 52, IWI3: 44 },
        { '%': 46, IWI1: 88, IWI2: 79, IWI3: 84 },
        { '%': 54, IWI1: 45, IWI2: 50, IWI3: 42 },
        { '%': 100, IWI1: 7, IWI2: 10, IWI3: 5 }
      ]
    }
  ]

  const avg1 = (dataset[0].source.reduce((acc, cur) => acc + cur.IWI1, 0) / dataset[0].source.length).toFixed(1)
  const avg2 = (dataset[0].source.reduce((acc, cur) => acc + cur.IWI2, 0) / dataset[0].source.length).toFixed(1)
  const avg3 = (dataset[0].source.reduce((acc, cur) => acc + cur.IWI3, 0) / dataset[0].source.length).toFixed(1)

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

          {/* numbers */}
          <div className="flex flex-col gap-4">
            <h3 className="text-5xl font-bold text-green-light">{avg1}</h3>
            <h3 className="text-5xl font-bold text-red-600">{avg2}</h3>
            <h3 className="text-5xl font-bold text-blue-700">{avg3}</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

const InterWealthIndexCard = withCard(InterWealthIndex)
export default InterWealthIndexCard
