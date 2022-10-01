event_records = []
current_time = Time.current
(1..5).each do |i|
  event_records << { name: "イベント#{i}", expected_at: current_time + i.months, created_at: current_time, updated_at: current_time }
end
Event.insert_all!(event_records)