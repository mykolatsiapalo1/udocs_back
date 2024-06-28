module.exports.getDeliverablesList = async (req, res) => {
  const list = [
    {
      type: "docx",
      Name: "Minutes of meeting",
      DateCreated: "Feb 3, 2023",
      createdBy: {
        email: "nicolas@turbodocx.com",
        icon: "path/to/icon.png",
      },
      variables: [
        {
          placeholder: "{Price}",
          Name: "Price",
          type: "number",
        },
        {
          placeholder: "{ActivitiesList}",
          Name: "ActivitiesList",
          type: "text",
        },
      ],
    },
    {
      type: "pptx",
      Name: "Imporrtant report",
      DateCreated: "Jan 21, 2023",
      createdBy: {
        email: "some@gmail.com",
        icon: "path/to/icon.png",
      },
      variables: [
        {
          placeholder: "{Price}",
          Name: "Price",
          type: "number",
        },
      ],
    },
  ];

  try {
    res.status(200).json({ data: list });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
