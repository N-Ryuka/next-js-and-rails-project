# == Schema Information
#
# Table name: user_events
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  event_id   :bigint           not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_user_events_on_event_id              (event_id)
#  index_user_events_on_user_id               (user_id)
#  index_user_events_on_user_id_and_event_id  (user_id,event_id) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (event_id => events.id)
#  fk_rails_...  (user_id => users.id)
#
class UserEvent < ApplicationRecord
  belongs_to :user
  belongs_to :event, uniqueness: { scope: :user_id }
end
