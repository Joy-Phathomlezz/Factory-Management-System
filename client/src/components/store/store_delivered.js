import React, { useState } from "react";
import { Table, Input, Tag } from "antd";
import { SearchOutlined } from "@ant-design/icons";

// Sample data (replace with your API or state)
const initialData = [
  {
    key: "1",
    deliveryId: "DLV-001",
    item: "Steel Rods",
    quantity: 100,
    deliveredTo: "Workshop A",
    deliveredBy: "John Doe",
    date: "2025-05-26",
    status: "Delivered",
  },
  {
    key: "2",
    deliveryId: "DLV-002",
    item: "Copper Wires",
    quantity: 50,
    deliveredTo: "Workshop B",
    deliveredBy: "Jane Smith",
    date: "2025-05-25",
    status: "Pending",
  },
  // Add more entries as needed
];

const statusColors = {
  Delivered: "green",
  Pending: "orange",
  Cancelled: "red",
};

const DeliveredPage = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(initialData);

  // Filter data based on search
  const filteredData = data.filter(
    (row) =>
      row.deliveryId.toLowerCase().includes(searchText.toLowerCase()) ||
      row.item.toLowerCase().includes(searchText.toLowerCase()) ||
      row.deliveredTo.toLowerCase().includes(searchText.toLowerCase()) ||
      row.deliveredBy.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: "Delivery ID",
      dataIndex: "deliveryId",
      key: "deliveryId",
      sorter: (a, b) => a.deliveryId.localeCompare(b.deliveryId),
    },
    {
      title: "Item",
      dataIndex: "item",
      key: "item",
      sorter: (a, b) => a.item.localeCompare(b.item),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: "Delivered To",
      dataIndex: "deliveredTo",
      key: "deliveredTo",
      sorter: (a, b) => a.deliveredTo.localeCompare(b.deliveredTo),
    },
    {
      title: "Delivered By",
      dataIndex: "deliveredBy",
      key: "deliveredBy",
      sorter: (a, b) => a.deliveredBy.localeCompare(b.deliveredBy),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "Delivered", value: "Delivered" },
        { text: "Pending", value: "Pending" },
        { text: "Cancelled", value: "Cancelled" },
      ],
      onFilter: (value, record) => record.status === value,
      render: (status) => (
        <Tag color={statusColors[status] || "blue"}>{status}</Tag>
      ),
    },
  ];

  return (
    <div>
      <h1 style={{ marginBottom: 24 }}>Delivered Contents</h1>
      <Input
        placeholder="Search by ID, item, recipient, or deliverer"
        prefix={<SearchOutlined />}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ width: 350, marginBottom: 20 }}
        allowClear
      />
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: 8 }}
        bordered
        rowKey="deliveryId"
        style={{ background: "#fff", borderRadius: 10 }}
      />
    </div>
  );
};

export default DeliveredPage;
