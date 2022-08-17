# == Schema Information
#
# Table name: fanclubs
#
#  id                :bigint           not null, primary key
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  fanclub_master_id :integer          not null
#  user_id           :bigint           not null
#
# Indexes
#
#  index_fanclubs_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
require 'test_helper'

class FanclubTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
