const RestaurantMonitoring = () => {
  return (
    <div>
      <ul>
        <li>
          Developed backend functionality to monitor the online status of
          restaurants during their business hours.
        </li>
        <li>
          Implemented data ingestion from multiple sources, including CSV files,
          and stored the data in a relevant database.
        </li>
        <li>
          Generated reports on the uptime and downtime of restaurants within
          their business hours.
        </li>
        <li>
          Utilized interpolation logic to extrapolate uptime and downtime based
          on periodic polls and available observations.
        </li>
        <li>
          Considered timezone information to align data sources and ensure
          accurate comparisons.
        </li>
        <li>
          Handled edge cases such as missing data and assumed 24/7 operation if
          business hours were not provided.
        </li>
        <li>
          Ensured well-structured and optimized code with a focus on performance
          and efficiency.
        </li>
        <li>
          Documented the logic for computing hours overlap and calculating
          uptime/downtime.
        </li>
      </ul>
    </div>
  );
};

export default RestaurantMonitoring;
