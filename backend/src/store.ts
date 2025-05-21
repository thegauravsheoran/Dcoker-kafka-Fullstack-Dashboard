interface LiveData {
  store_id: number;
  customers_in: number;
  customers_out: number;
  time_stamp: string;
}

interface HistoryData {
  store_id: number;
  hour: string;
  total_in: number;
  total_out: number;
}

let liveData: LiveData[] = [];
let historyMap = new Map<string, HistoryData>();

export const updateLiveData = (data: LiveData) => {
  liveData.push(data);
  if (liveData.length > 1000) liveData.shift();
};

export const getLiveData = () => liveData;

export const aggregateHistory = (data: LiveData) => {
  const hour = data.time_stamp.slice(0, 5);
  const key = `${data.store_id}-${hour}`;

  const existing = historyMap.get(key) || {
    store_id: data.store_id,
    hour,
    total_in: 0,
    total_out: 0
  };

  existing.total_in += data.customers_in;
  existing.total_out += data.customers_out;
  historyMap.set(key, existing);
};

export const getHistoryData = () => Array.from(historyMap.values());
