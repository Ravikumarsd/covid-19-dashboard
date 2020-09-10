import React from "react";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import "./StatusNumberCard.css";

export default function StatusNumberCard({ count, status, color }) {
  status = status.toUpperCase();
  return (
    <Card id={status} className={`root ${color} `}>
      <CardContent>
        <Typography className={`title text-${color}`} color="textPrimary">
          {status}
        </Typography>
        <Typography className={`sub-title text-${color}`} color="textSecondary">
          {count}
        </Typography>
      </CardContent>
    </Card>
  );
}
