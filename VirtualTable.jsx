import React, { useState, useEffect, useRef } from 'react'
import { VariableSizeGrid as Grid } from 'react-window'
import ResizeObserver from 'rc-resize-observer'
import cls from 'classnames'
import { Table, Checkbox } from 'antd'

//带全选的虚拟列表，columns 不能render，不方便。
//表格也有偏差
const VirtualTable = (props) => {
  const { columns, scroll, dataSource } = props
  const [_dataSource, set_dataSource] = useState(dataSource.map(v => (v.checked = false, v)))
  const [tableWidth, setTableWidth] = useState(0)
  let totalWidth = 0
  const widthColumnCount = columns.filter(({ width }) => (!!width&&(totalWidth += width), !width)).length

  const mergedColumns = columns.map((column,index) => {
    if (!column.width) {
      column = { ...column, width: Math.floor((tableWidth - totalWidth) / widthColumnCount) }
    }
    return column
  })

  const gridRef = useRef()
  const [connectObject] = useState(() => {
    const obj = {}
    Object.defineProperty(obj, 'scrollLeft', {
      get: () => null,
      set: (scrollLeft) => {
        if (gridRef.current) {
          gridRef.current.scrollTo({
            scrollLeft,
          })
        }
      },
    });
    return obj
  });

  const resetVirtualGrid = () => {
    gridRef.current&&gridRef.current.resetAfterIndices({
      columnIndex: 0,
      shouldForceUpdate: true,
    })
  }

  useEffect(() => resetVirtualGrid, [tableWidth])

  const onChange = (e, curData) => {
    console.log(curData)
    set_dataSource(_dataSource.map(v => {
      if (v.key === curData.key) {
        v.checked = !v.checked
      }
      return v
    }))
  }

  const onSelectAllChecked = checked => {
    set_dataSource(_dataSource.map(v => (v.checked = checked, v)))
  }

  const renderVirtualList = (rawData, { scrollbarSize, ref, onScroll }) => {
    ref.current = connectObject
    const totalHeight = rawData.length * 54
    return (
      <Grid
        ref={gridRef}
        className="virtual-grid"
        columnCount={mergedColumns.length}
        columnWidth={(index) => {
          const { width } = mergedColumns[index]
          return totalHeight > scroll.y && index === mergedColumns.length - 1
            ? width - scrollbarSize - 1
            : width
        }}
        height={scroll.y}
        rowCount={rawData.length}
        rowHeight={() => 54}
        width={tableWidth}
        onScroll={({ scrollLeft }) => {
          onScroll({
            scrollLeft,
          })
        }}
      >
        {({ columnIndex, rowIndex, style }) => {
          const _style={}
          if (columnIndex === 0){
            _style.width=(style.width + 36)
          }
          return (
          <div
            className={cls('virtual-table-cell', {
              'virtual-table-cell-last': columnIndex === mergedColumns.length - 1
            })}
            style={{
              ...style,
              ..._style
            }}
          >
            {columnIndex === 0 && <Checkbox style={{margin:'0 10px 0 10px'}} onChange={(e) => onChange(e, rawData[rowIndex])} checked={rawData[rowIndex].checked} />}
            {rawData[rowIndex][mergedColumns[columnIndex].dataIndex]}
          </div>
        )}}
      </Grid>
    )
  }
  const rowSelection = {
    columnWidth:36, //ant-table-cell  css只移第一个
    onSelectAll: (selected, selectedRows, changeRows) => {
      onSelectAllChecked(selected)
    }
  }

  return (
    <ResizeObserver
      onResize={({ width }) => {
        setTableWidth(width)
      }}
    >
      <Table
        {...props}
        className="virtual-table"
        columns={mergedColumns}
        dataSource={_dataSource}
        pagination={false}
        rowSelection={rowSelection}
        components={{
          body: renderVirtualList,
        }}
      />
    </ResizeObserver>
  )
}


export default VirtualTable


const columns = [
  {
    title: 'A',
    dataIndex: 'key',
    width: 150,
  },
  {
    title: 'B',
    dataIndex: 'key',
  },
  {
    title: 'C',
    dataIndex: 'key',
  },
  {
    title: 'D',
    dataIndex: 'key',
  },
  {
    title: 'E',
    dataIndex: 'key',
    width: 200,
  },
  {
    title: 'F',
    dataIndex: 'key',
    width: 100,
  },
];
const data = Array.from(
  {
    length: 100000,
  },
  (_, key) => ({ key })
)

{/* < VirtualTable
columns = { columns }
dataSource = { data }
scroll = {{
  y: 300,
          // x: '100vw',
        }}
/> */}