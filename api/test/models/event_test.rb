# == Schema Information
#
# Table name: events
#
#  id          :bigint           not null, primary key
#  expected_at :datetime
#  name        :string(255)      not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_events_on_name  (name) UNIQUE
#
require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
