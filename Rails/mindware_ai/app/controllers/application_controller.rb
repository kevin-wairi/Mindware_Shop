class ApplicationController < ActionController::Base
        include DeviseTokenAuth::Concerns::SetUserByToken
        skip_before_action :verify_authenticity_token
        after_action :set_access_control_expose_headers

        private

        def set_access_control_expose_headers
                response.headers['Access-Control-Expose-Headers'] = 'Authorization'
        end
end
      